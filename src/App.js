import React from "react";
import { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import brandsDB from "./brands.json";
import Header from "./components/Header";
import styles from "./styles/Home.module.css";
import { FaSistrix } from "react-icons/fa";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Loading from "./components/Loading";

function App() {
  let brandsArray = [];
  for (let i in brandsDB) brandsArray.push(brandsDB[i]);

  const [text, setText] = useState("");
  const [brands, setBrands] = useState(brandsArray);

  const SingleBrand = React.lazy(() => import("./components/SingleBrand"));

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) => brand.title.toLowerCase().includes(text))
    );
    // eslint-disable-next-line
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className={styles.searchBar}>
                  <form className={styles.searchForm}>
                    <FaSistrix />
                    <input
                      type="text"
                      onChange={handleChange}
                      className={styles.searchInput}
                      placeholder="Marka ismi"
                    />
                  </form>
                </div>
                <div className={styles.brands}>
                  <div className={styles.brandList}>
                    <Suspense fallback={<Loading />}>
                      {brands.map((brand, idx) => (
                        <SingleBrand brand={brand} key={idx} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
