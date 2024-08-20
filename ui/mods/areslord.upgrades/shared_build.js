var newBuild = {

    "/pa/units/land/laser_defense_legged_build/laser_defense_legged_build.json": ["upgrade1", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/artillery_long_legged_build/artillery_long_legged_build.json": ["upgrade2", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/laser_defense_adv_legged_build/laser_defense_adv_legged_build.json": ["upgrade3", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/laser_defense_single_mobile_build/laser_defense_single_mobile_build.json": ["upgrade4", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/air_defense_mobile_build/air_defense_mobile_build.json": ["upgrade5", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/air_defense_adv_mobile_build/air_defense_adv_mobile_build.json": ["upgrade6", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/tactical_missile_launcher_mobile_build/tactical_missile_launcher_mobile_build.json": ["upgrade7", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/artillery_short_mobile_build/artillery_short_mobile_build.json": ["upgrade8", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/energy_plant_adv_2_build/energy_plant_adv_2_build.json": ["upgrade9", 0, { row: 2, column: 0 }],
    "/pa/units/upgrades/energy_plant_adv_3_build/energy_plant_adv_3_build.json": ["upgrade10", 0, { row: 2, column: 0 }],

    "/pa/units/arsenal/arsenal/arsenal.json": ["structure", 0, {row: 1, column: 1}],
    
    "/pa/units/arsenal/unlocks/tank_nuke_airboom_unlock/tank_nuke_airboom_unlock.json":["arsenal",2,{row:2,column:0}],
    "/pa/units/arsenal/unlocks/tank_nuke_airboom_unlock/arsenal_tank_nuke.json":["arsenal_2",2,{row:2,column:1}],

    "/pa/units/arsenal/unlocks/solar_drone_up_unlock/solar_drone_up_unlock.json":["arsenal",2,{row:2,column:1}],
    "/pa/units/arsenal/unlocks/solar_drone_up_unlock/arsenal_solar_drone.json":["arsenal_2",2,{row:2,column:3}],

    "/pa/units/arsenal/unlocks/dox_air_unlock/dox_air_unlock.json":["arsenal",2,{row:2,column:2}],
    "/pa/units/arsenal/unlocks/dox_air_unlock/arsenal_assault_bot.json":["arsenal_2",2,{row:2,column:3}],

    "/pa/units/arsenal/unlocks/bot_bomb_up_unlock/bot_bomb_up_unlock.json":["arsenal",2,{row:2,column:3}],
    "/pa/units/arsenal/unlocks/bot_bomb_up_unlock/arsenal_bot_bomb.json":["arsenal_2",2,{row:2,column:4}],

    "/pa/units/arsenal/unlocks/assault_bot_adv_up_unlock/assault_bot_adv_up_unlock.json":["arsenal",2,{row:2,column:4}],
    "/pa/units/arsenal/unlocks/assault_bot_adv_up_unlock/arsenal_assault_bot_adv.json":["arsenal_2",2,{row:2,column:5}],

    "/pa/units/arsenal/unlocks/tank_heavy_armor_up_unlock/tank_heavy_armor_up_unlock.json":["arsenal",2,{row:2,column:5}],
    "/pa/units/arsenal/unlocks/tank_heavy_armor_up_unlock/arsenal_tank_heavy_armor.json":["arsenal_2",2,{row:2,column:6}],

    "/pa/units/arsenal/unlocks/tank_laser_adv_up_unlock/tank_laser_adv_up_unlock.json":["arsenal",2,{row:2,column:6}],
    "/pa/units/arsenal/unlocks/tank_laser_adv_up_unlock/arsenal_tank_laser_adv.json":["arsenal_2",2,{row:2,column:7}]


}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}