// // JavaScript Document

function showHideElements(elementsToShow, elementsToHide) {
  $(elementsToHide.join(", ")).hide();
  $(elementsToShow.join(", ")).show();
}

function destinationSelect(val, mappings) {
  const mapping = mappings[val];

  if (mapping) {
    showHideElements(mapping.show, mapping.hide);
  }
}

const mappings = {
  Techversions: {
    show: ["#dropdownmultiButton", "#clickhereTech"],
    hide: [
      "#dropdownmultiButton1",
      "#dropdownmultiButton2",
      "#dropdownmultiButton3",
      "#dropdownmultiButton4",
      "#dropdownmultiButton5",
      "#dropdownmultiButton6",
      "#clickhereTechWeb",
      "#clickhereTechnoDigest",
      "#clickhereBI",
      "#clickhereTB",
      "#clickhereIL",
      "#clickhereDP",
      "#Tech",
      "#clickhere",
    ],
  },
  TechWebTrends: {
    show: ["#dropdownmultiButton1", "#clickhereTechWeb"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton2",
      "#dropdownmultiButton3",
      "#dropdownmultiButton4",
      "#dropdownmultiButton5",
      "#dropdownmultiButton6",
      "#clickhereTech",
      "#clickhereTechnoDigest",
      "#clickhereBI",
      "#clickhereTB",
      "#clickhereIL",
      "#clickhereDP",
      "#Tech",
      "#clickhere",
    ],
  },
  TheTechnoDigest: {
    show: ["#dropdownmultiButton2", "#clickhereTechnoDigest"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton1",
      "#dropdownmultiButton3",
      "#dropdownmultiButton4",
      "#dropdownmultiButton5",
      "#dropdownmultiButton6",
      "#clickhereTech",
      "#clickhereTB",
      "#clickhereIL",
      "#clickhereDP",
      "#dropdownmultiButton1",
      "#clickhereTechWeb",
      "#Tech",
      "#clickhere",
    ],
  },
  BusinessInnovations: {
    show: ["#dropdownmultiButton3", "#clickhereBI"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton1",
      "#dropdownmultiButton2",
      "#dropdownmultiButton4",
      "#dropdownmultiButton5",
      "#dropdownmultiButton6",
      "#clickhereTech",
      "#clickhereTB",
      "#clickhereTechnoDigest",
      "#clickhereIL",
      "#clickhereDP",
      "#dropdownmultiButton1",
      "#clickhereTechWeb",
      "#Tech",
      "#clickhere",
    ],
  },
  DeltaPunch: {
    show: ["#dropdownmultiButton4", "#clickhereDP"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton1",
      "#dropdownmultiButton2",
      "#dropdownmultiButton3",
      "#dropdownmultiButton5",
      "#dropdownmultiButton6",
      "#clickhereTech",
      "#clickhereTB",
      "#clickhereTechnoDigest",
      "#clickhereBI",
      "#clickhereIL",
      "#dropdownmultiButton1",
      "#clickhereTechWeb",
      "#Tech",
      "#clickhere",
    ],
  },
  TheTechnoBytes: {
    show: ["#dropdownmultiButton5", "#clickhereTB"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton1",
      "#dropdownmultiButton2",
      "#dropdownmultiButton3",
      "#dropdownmultiButton4",
      "#dropdownmultiButton6",
      "#clickhereTech",
      "#clickhereTechnoDigest",
      "#clickhereBI",
      "#clickhereIL",
      "#clickhereDP",
      "#dropdownmultiButton1",
      "#clickhereTechWeb",
      "#Tech",
      "#clickhere",
    ],
  },
  InsightsLiving: {
    show: ["#dropdownmultiButton6", "#clickhereIL"],
    hide: [
      "#dropdownmultiButton",
      "#dropdownmultiButton1",
      "#dropdownmultiButton2",
      "#dropdownmultiButton3",
      "#dropdownmultiButton4",
      "#dropdownmultiButton5",
      "#clickhereTech",
      "#clickhereDP",
      "#clickhereTechnoDigest",
      "#clickhereBI",
      "#clickhereTB",
      "#dropdownmultiButton1",
      "#clickhereTechWeb",
      "#Tech",
      "#clickhere",
    ],
  },
  TheHREmpire: {
    show: ["#dropdownmultiButton7", "#clickhereHE"],
    hide: ["#HR", "#clickhereHR"],
  },
  TheSalesMark: {
    show: ["#dropdownmultiButton8", "#clickhereSm"],
    hide: [
      "#dropdownmultiButton9",
      "#clickhereLMW",
      "#SalesMark",
      "#clickhereTheSML",
    ],
  },
  LeadMarketWise: {
    show: ["#dropdownmultiButton9", "#clickhereLMW"],
    hide: [
      "#dropdownmultiButton8",
      "#clickhereSm",
      "#SalesMark",
      "#clickhereTheSML",
    ],
  },
  TheGrowthInsights: {
    show: ["#dropdownmultiButton10", "#clickhereGI"],
    hide: ["#GI", "#clickhereEC"],
  },
  FinancePulseDaily: {
    show: ["#dropdownmultiButton11", "#clickhereFPD"],
    hide: ["#Finance", "#clickhereFinance"],
  },
  CloudTechAlert: {
    show: ["#dropdownmultiButton12", "#clickhereCTA"],
    hide: ["#Cloud", "#clickhereCloud"],
  },
  HealthcareTechAlert: {
    show: ["#dropdownmultiButton13", "#clickhereHTA"],
    hide: ["#HT", "#clickhereHT"],
  },
  ModerncampusDigest: {
    show: ["#dropdownmultiButton14", "#clickhereMCD"],
    hide: ["#EDU", "#clickhereEDU"],
  },
  DocShareIT: {
    show: ["#dropdownmultiButton15", "#clickhereWlDST"],
    hide: ["#DSI", "#clickhereDSI"],
  },
  Black: {
    show: ["#dropdownmultiButton19", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  DesignWorld: {
    show: ["#dropdownmultiButton20", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  EEWorldOnline: {
    show: ["#dropdownmultiButton21", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  MassDevice: {
    show: ["#dropdownmultiButton22", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  MedicalDesignOutSourcing: {
    show: ["#dropdownmultiButton23", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  TheRobotReport: {
    show: ["#dropdownmultiButton24", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton25",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  SolarPowerWorld: {
    show: ["#dropdownmultiButton25", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton26",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  WindPower: {
    show: ["#dropdownmultiButton26", "#clickhereWTWHsever"],
    hide: [
      "#dropdownmultiButton19",
      "#dropdownmultiButton20",
      "#dropdownmultiButton21",
      "#dropdownmultiButton22",
      "#dropdownmultiButton23",
      "#dropdownmultiButton24",
      "#dropdownmultiButton25",
      "#WTWH",
      "#clickhereWTWH",
    ],
  },
  TechMasterPros: {
    show: ["#dropdownmultiButton16", "#clickhereTMP"],
    hide: ["#dropdownmultiButton17", "#MSFT", "#clickhereMSFT"],
  },
  TechInsightToday: {
    show: ["#dropdownmultiButton17", "#clickhereTIT"],
    hide: [
      "#dropdownmultiButton16",
      "#clickhereTMP",
      "#MSFT",
      "#clickhereMSFT",
    ],
  },
  TheBestofBlockchain: {
    show: ["#dropdownmultiButton18", "#clickhereBOB"],
    hide: ["#Crypto", "#clickhereCrypto"],
  },
  // ... add more mappings for other values
};

$(document).ready(function () {
  $(".categorySelect").change(function () {
    const selectedValue = $(this).val();
    destinationSelect(selectedValue, mappings);
  });
});
