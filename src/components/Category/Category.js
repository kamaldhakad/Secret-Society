import React from "react";
import { CategoryData } from "./CategoryData.js";

const Category = ({ filterDataHandler }) => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        {CategoryData.map((item) => (
          <>
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.categoryTitle}`}
                  aria-expanded="true"
                  aria-controls={item.categoryTitle}
                >
                  {item.categoryTitle}
                </button>
              </h2>
              <div
                id={item.categoryTitle}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul>
                    {item.subCategory.map((itm, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          filterDataHandler({
                            category: item.categoryTitle,
                            subCategory: itm.subCatTitle,
                          })
                        }
                      >
                        {itm.subCatTitle}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Category;
