import { types, flow } from "mobx-state-tree";

const URL = "https://massage-reviews.onrender.com/api/reviews";

const fetchData = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Помилка отримання даних: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Помилка отримання даних:", error.message);
    throw error; // Перекинути помилку далі для обробки в компоненті
  }
};

export const ReviewModel = types.model("ReviewModel", {
  name: types.optional(types.string, ""),
  comment: types.optional(types.string, ""),
  totalPositiveStars: types.optional(types.number, 0),
  id: types.optional(types.string, ""),
});

export const ReviewsStore = types
  .model("ReviewsStore", {
    reviews: types.array(ReviewModel),
  })
  .actions((store) => ({
    setReviews(newReviews) {
      store.reviews = newReviews;
    },
    addReview: flow(function* (newReview) {
      try {
        const response = yield fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });

        if (response.ok) {
          const responseData = yield response.json();
          newReview.id = responseData.id;

          store.reviews.unshift(newReview);
        } else {
          console.error("Помилка відправлення на бекенд:", response.status);
        }
      } catch (error) {
        console.error("Помилка відправлення на бекенд:", error.message);
      }
    }),
    fetchReviews: flow(function* () {
      try {
        const data = yield fetchData();
        const newReviews = data.map((review) => ({
          name: review.name,
          comment: review.comment,
          totalPositiveStars: review.totalPositiveStars,
          id: review._id,
        }));

        store.setReviews(newReviews);
      } catch (error) {
        console.error("Помилка отримання даних:", error.message);
      }
    }),
  }));

let _reviewsStore;

export const useReviews = () => {
  if (!_reviewsStore) {
    _reviewsStore = ReviewsStore.create({
      reviews: [],
    });
  }
  return _reviewsStore;
};
