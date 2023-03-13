import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import { AnimatePresence, m } from "framer-motion";
import ojimage from "../../images/mw.png";
import { Divider } from "antd";
import { dashboardOperationOptions, container, item } from "../constant";
import "./maindash.css";

const MainDashboard = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    document.title = "IMS - Main Dashboard";
  }, []);

  return (
    <m.div
      className="main-dash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex-between">
        <div className="flex-small-gap">
          <div className="bold large-text text-grey">IMS Application -</div>
          <div className="bold large-text text-orange">Muscat Waves</div>
        </div>
        <img
          src={ojimage}
          className="header-image"
          alt="Oman jobs"
          onClick={() => navigateTo("/")}
        />
      </div>
      <div className="main-body">
        <Divider orientation="left" orientationMargin="0">
          <div className="bolder text-black">Operations Division</div>
        </Divider>
        <AnimatePresence>
          <m.div
            className="cards-main-rec"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {dashboardOperationOptions.map(
              (card) =>
                !card.disabled && (
                  <m.div
                    className="cards-main-rec__each"
                    key={card.id}
                    onClick={() =>
                      card.direct
                        ? window.open(card.path)
                        : navigateTo(card.path)
                    }
                    variants={item}
                  >
                    <div className="dash-card-icon">
                      <card.icon style={{ fontSize: "40px" }} />
                    </div>
                    <div className="flex-small-gap-column">
                      <h2>{card.title}</h2>
                      <p className="small-text paragraph-padding-issue-fix">
                        {card.description}
                      </p>
                    </div>
                    <div className="go-corner" href="#">
                      <div className="go-arrow">→</div>
                    </div>
                  </m.div>
                )
            )}
          </m.div>
        </AnimatePresence>
      </div>
    </m.div>
  );
};

export default MainDashboard;
