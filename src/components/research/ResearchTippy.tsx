import React, { ReactNode } from "react";

import { getUnitOrBuildingStats } from "../../utils";

interface TippyUnitStasProps {
  attack: number,
  movement: number,
  maintenance: number,
  name: string,
}

interface TippyBuildingStatsProps {
  value: number,
  resourceName: "science" | "gold" | "food" | "production" | "housing" | "defence",
}

const TippyUnitStats = ({ attack, movement, maintenance, name}: TippyUnitStasProps) => {
  return (
    <div className="unit-stats-container">
      <img width="50" src={`./${name.toLowerCase()}.png`} alt="Archer" />
      <div className="unit-stats-tippy">
        <p>Attack: <span>{attack}</span></p>
        <p>Movement: <span>{movement}</span></p>
        <p>Maintenance: <span>{maintenance}</span></p>
      </div>
    </div>
  )
}

const TippyBuildingStats = ({ value, resourceName }: TippyBuildingStatsProps) => {
  return (
    <div>
      {/* @todo: need to add image of each building */}
      <span>+{value} {resourceName}</span>
    </div>
  )
}

const ResearchTippy = (researchName: string): ReactNode => {
  const stats = getUnitOrBuildingStats(researchName);
  
  if (!stats) return <span>Unlocks Archery</span>

  if (stats.type === "building" && stats.extra) {
    return <span><span className="bold-text">+{stats.income} {stats.resourceName}</span> | <span className="bold-text">+{stats.extraValue} {stats.extra}</span></span>
  } else if (stats.type === "building") {
    return <TippyBuildingStats value={stats.income} resourceName={stats.resourceName} />
  } else if (stats.type === "unit") {
    return <TippyUnitStats name={researchName} attack={stats.attack} movement={stats.movement} maintenance={stats.movement} />
  } else if (stats.type === "wall") {
    return <span>Wall with <span className="bold-text">{stats.health} HP</span> and <span className="bold-text">{stats.attack} attack</span></span>
  }
}

export default ResearchTippy