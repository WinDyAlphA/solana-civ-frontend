import React from "react";

import { BuildingType } from "../Buildings";

const CustomTooltip: React.FC<BuildingType & { selectedTab: number }> = ({
  description,
  stats,
  requirement,
  tech,
  productionCost,
  selectedTab,
  goldCost,
  isUnlocked,
}) => {
  return (
    <div className="custom-tooltip">
      {requirement && !isUnlocked ? (
        <p className="research-required-text">
          Research required: <b>{tech}</b>
        </p>
      ) : (
        <>
          <p>{description}</p>
          <div className="unit-stats-container">
            {stats?.builds && (
              <span>
                Builds:&nbsp; <b>{stats.builds}</b>
              </span>
            )}
            {stats?.movement && (
              <span style={stats?.builds ? { marginLeft: '2.2rem'} : undefined}>
                Movement:&nbsp; <b>{stats.movement}</b>
                <img width="24" src="./icons/movement.png" alt="foot" />
              </span>
            )}
            {stats?.attack && (
              <span style={{ marginLeft: '1.3rem'}}>
                Attack:&nbsp; <b>{stats.attack}</b>
                <img width="24" src="./icons/attack.png" alt="axe" />
              </span>
            )}
          </div>
          <div className="yield-container">
            {stats?.yield && (
              <span>
                Yield:&nbsp; <b>{stats.yield}</b>
              </span>
            )}
          </div>
          <div className="line-container">
            <img src="/icons/diamond.png" alt="" width="18" className="center-image" />
          </div>
          <div className="resource-maintenance-container">
            {stats?.resourceCost && (
              <span>
                {stats.resourceCost.includes("population") && <span>Cost:&nbsp;</span>}
                {stats.resourceCost.includes("Cost") ? <span>Cost:&nbsp; <b>{stats.resourceCost.split(":")[1]}</b></span> : <b>{stats.resourceCost}</b>}
                {stats?.resourceType && <img width="24" src={`./icons/${stats?.resourceType}.png`} alt={stats?.resourceType} />}
              </span>
            )}
            {stats?.maintenanceCost && (
              <span>
                Maintenance:&nbsp;<b>{stats.maintenanceCost} </b>
                <img width="24" src={`./icons/gold.png`} alt="gold" />
              </span>
            )}
            {selectedTab === 0 ? (
              <span>
                Production cost:&nbsp;<b>{productionCost}</b>
                <img width="24" src="./icons/hammer.png" alt="gear" />
              </span>
            ) : (
              <span>
                Cost:&nbsp;<b>{goldCost}</b>
                <img width="24" src="./icons/gold.png" alt="gold" />
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomTooltip