import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const PricePage = lazy(() => import("./pages/PricePage/PricePage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage/ArticlePage"));
const PriceWomen = lazy(() => import("./components/Women/Women"));
const PriceMen = lazy(() => import("./components/Men/Men"));
const PriceChildren = lazy(() => import("./components/Children/Children"));
const PriceBody = lazy(() => import("./components/Body/Body"));
const PriceElse = lazy(() => import("./components/Else/Else"));
const Questions = lazy(() => import("./components/Questions/Questions"));
const Health = lazy(() => import("./components/Health/Health"));
const Expectation = lazy(() => import("./components/Expectation/Expectation"));

const NavRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/price/*" element={<PricePage />}>
          <Route index element={<Navigate to="women" replace />} />
          <Route path="women" element={<PriceWomen />} />
          <Route path="men" element={<PriceMen />} />
          <Route path="children" element={<PriceChildren />} />
          <Route path="body" element={<PriceBody />} />
          <Route path="else" element={<PriceElse />} />
        </Route>
        <Route path="/article/*" element={<ArticlePage />}>
          <Route index element={<Navigate to="questions" replace />} />
          <Route path="questions" element={<Questions />} />
          <Route path="health" element={<Health />} />
          <Route path="expectation" element={<Expectation />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default NavRoutes;
