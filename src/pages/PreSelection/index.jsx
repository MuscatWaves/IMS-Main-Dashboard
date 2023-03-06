import React from "react";
import { useParams } from "react-router-dom";
import {
  dashboardOperationOptions,
  dashboardSupportOptions,
  container,
  item,
} from "../constant";
import { AnimatePresence, m } from "framer-motion";
import ojimage from "../../images/mw-small.png";
import BreadCrumb from "../../components/BreadCrumb";
import { useNavigate } from "react-router-dom/dist";
import { removeUnderScore } from "../../utilities";
import "./preselection.css";

const PreSelection = () => {
  const navigateTo = useNavigate();
  const params = useParams();
  const menu =
    params.type === "operations"
      ? dashboardOperationOptions
      : dashboardSupportOptions;

  const navigation = [
    { id: 0, name: "Dashboard", url: "/" },
    {
      id: 1,
      name: `${removeUnderScore(params.service)} - ${removeUnderScore(
        params.type
      )}`,
      active: true,
    },
  ];

  return (
    <m.div
      className="pre-dash"
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
      <div className="pre-select-second">
        <div className="title-text text-black">
          {removeUnderScore(params.service)}
        </div>
        <BreadCrumb items={navigation} />
        <div className="text-light-grey large-text">
          Please select the login!
        </div>
      </div>
      <AnimatePresence>
        <m.div
          className="preselect-card"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {menu
            .filter((item) => item.id === Number(params.id))[0]
            .users.map(
              (card) =>
                !card.disabled && (
                  <m.div
                    className="pre-select-cards-main__each"
                    key={card.id}
                    onClick={() => window.open(card.path)}
                    variants={item}
                  >
                    <div className="dash-card-icon">
                      <card.icon style={{ fontSize: "40px" }} />
                    </div>
                    <div className="flex-small-gap-column">
                      <h2>{card.title}</h2>
                      <p className="small-text paragraph-padding-issue-fix">
                        {card?.description}
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
    </m.div>
  );
};

export default PreSelection;
