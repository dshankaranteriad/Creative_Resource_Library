// JavaScript Document

function destinationSelect(val) {
  var dropdownHover = $(
    "#dropdownmultiButton, #dropdownmultiButton1, #dropdownmultiButton2, #dropdownmultiButton3, #dropdownmultiButton4, #dropdownmultiButton5, #dropdownmultiButton6, #Tech, #clickhereTech, #clickhere, #clickhereTechWeb,#clickhereTechnoDigest, #clickhereBI, #clickhereDP, #clickhereTB, #clickhereIL"
  );

  // Tech/Generic
  if (val === "Techversions") {
    $("#dropdownmultiButton").show();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton6").hide();

    $("#clickhereTech").show();
    $("#clickhereTechWeb").hide();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereTB").hide();
    $("#clickhereIL").hide();
    $("#clickhereDP").hide();
    $("#clickhere").hide();

    $("#Tech").hide();
    //TechVersions
  } else if (val === "TechWebTrends") {
    $("#dropdownmultiButton1").show();
    $("#dropdownmultiButton").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton6").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").show();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereTB").hide();
    $("#clickhereIL").hide();
    $("#clickhereDP").hide();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //TechWebTrends
  else if (val === "TheTechnoDigest") {
    $("#dropdownmultiButton2").show();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton6").hide();
    $("#dropdownmultiButton").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").hide();
    $("#clickhereTB").hide();
    $("#clickhereIL").hide();
    $("#clickhereDP").hide();
    $("#clickhereTechnoDigest").show();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //TheTechnoDigest
  else if (val === "BusinessInnovations") {
    $("#dropdownmultiButton6").hide();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton3").show();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").hide();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereTB").hide();
    $("#clickhereDP").hide();
    $("#clickhereBI").show();
    $("#clickhereIL").hide();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //BusinessInnovations
  else if (val === "DeltaPunch") {
    $("#dropdownmultiButton6").hide();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton4").show();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").hide();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereBI").hide();
    $("#clickhereTB").hide();
    $("#clickhereDP").show();
    $("#clickhereIL").hide();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //DeltaPunch
  else if (val === "TheTechnoBytes") {
    $("#dropdownmultiButton6").hide();
    $("#dropdownmultiButton5").show();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").hide();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereBI").hide();
    $("#clickhereDP").hide();
    $("#clickhereTB").show();
    $("#clickhereIL").hide();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //TheTechnoBytes
  else if (val === "InsightsLiving") {
    $("#dropdownmultiButton6").show();
    $("#dropdownmultiButton5").hide();
    $("#dropdownmultiButton4").hide();
    $("#dropdownmultiButton3").hide();
    $("#dropdownmultiButton2").hide();
    $("#dropdownmultiButton1").hide();
    $("#dropdownmultiButton").hide();

    $("#clickhereTech").hide();
    $("#clickhereTechWeb").hide();
    $("#clickhereTechnoDigest").hide();
    $("#clickhereBI").hide();
    $("#clickhereDP").hide();
    $("#clickhereTB").hide();
    $("#clickhereIL").show();
    $("#clickhere").hide();

    $("#Tech").hide();
  } //InsightsLiving
}

destinationSelect();

// Human Resource
function destinationSelectHR(val) {
  var dropdownHoverHR = $(
    "#dropdownmultiButton7, #HR, #clickhereHR, #clickhereHE"
  );

  if (val === "TheHREmpire") {
    $("#dropdownmultiButton7").show();
    $("#clickhereHE").show();

    $("#clickhereHR").hide();
    $("#HR").hide();
    //TheHREmpire
  }
}

destinationSelectHR();

// Marketing/Sales

function destinationSelectMarketingSales(val) {
  var dropdownHoverTheMrSa = $(
    "#dropdownmultiButton8, #dropdownmultiButton9, #SalesMark, #clickhereLMW, #clickhereTheSML, #clickhereSm"
  );

  if (val === "TheSalesMark") {
    $("#dropdownmultiButton8").show();
    $("#clickhereSm").show();

    $("#clickhereTheSML").hide();
    $("#SalesMark").hide();
    $("#dropdownmultiButton9").hide();
    $("#clickhereLMW").hide();

    //TheSalesMark
  } else if (val === "LeadMarketWise") {
    $("#dropdownmultiButton9").show();
    $("#clickhereLMW").show();

    $("#dropdownmultiButton8").hide();
    $("#SalesMark").hide();
    $("#clickhereTheSML").hide();
    $("#clickhereSm").hide();
  } //LeadMarketWise
}

destinationSelectMarketingSales();

// eCommerce

function destinationSelectECommerce(val) {
  var dropdownHoverECommerce = $(
    "#dropdownmultiButton10, #GI, #clickhereEC, #clickhereGI"
  );

  if (val === "TheGrowthInsights") {
    $("#dropdownmultiButton10").show();
    $("#clickhereGI").show();

    $("#clickhereEC").hide();
    $("#GI").hide();

    //TheGrowthInsights
  }
}

destinationSelectECommerce();

// Finance

function destinationSelectFinance(val) {
  var dropdownHoverFinance = $(
    "#dropdownmultiButton11, #Finance, #clickhereFinance, #clickhereFPD"
  );

  if (val === "FinancePulseDaily") {
    $("#dropdownmultiButton11").show();
    $("#clickhereFPD").show();

    $("#clickhereFinance").hide();
    $("#Finance").hide();

    //FinancePulseDaily
  }
}

destinationSelectFinance();

//Cloud/Salesforce
function destinationSelectCloud(val) {
  var dropdownHoverCloud = $(
    "#dropdownmultiButton12, #Cloud, #clickhereCloud, #clickhereCTA"
  );

  if (val === "CloudTechAlert") {
    $("#dropdownmultiButton12").show();
    $("#clickhereCTA").show();

    $("#clickhereCloud").hide();
    $("#Cloud").hide();

    //CloudTechAlert
  }
}

destinationSelectCloud();

//Healthcare
function destinationSelectHealthcare(val) {
  var dropdownHoverHealthcare = $(
    "#dropdownmultiButton13, #HT, #clickhereHT, #clickhereHTA"
  );

  if (val === "HealthcareTechAlert") {
    $("#dropdownmultiButton13").show();
    $("#clickhereHTA").show();

    $("#clickhereHT").hide();
    $("#HT").hide();

    //HealthcareTechAlert
  }
}

destinationSelectHealthcare();

//Education
function destinationSelectEducation(val) {
  var dropdownHoverEducation = $(
    "#dropdownmultiButton14, #EDU, #clickhereEDU, #clickhereMCD"
  );

  if (val === "ModerncampusDigest") {
    $("#dropdownmultiButton14").show();
    $("#clickhereMCD").show();

    $("#clickhereEDU").hide();
    $("#EDU").hide();

    //ModerncampusDigest
  }
}

destinationSelectEducation();

//White Label
function destinationSelectDocShareIT(val) {
  var dropdownHoverDocShareIT = $(
    "#dropdownmultiButton15, #dropdownmultiButton19, #dropdownmultiButton20, #dropdownmultiButton21, #dropdownmultiButton22, #dropdownmultiButton23, #dropdownmultiButton24, #dropdownmultiButton25, #dropdownmultiButton26, #DSI, #clickhereDSI, #clickhereWlDST"
  );

  if (val === "DocShareIT") {
    $("#dropdownmultiButton15").show();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();

    //DocShareIT
  } else if (val === "Black") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").show();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "DesignWorld") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").show();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "EEWorldOnline") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").show();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "MassDevice") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").show();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "MedicalDesignOutSourcing") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").show();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "TheRobotReport") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").show();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "SolarPowerWorld") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").show();
    $("#dropdownmultiButton26").hide();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  } else if (val === "WindPower") {
    $("#dropdownmultiButton15").hide();
    $("#dropdownmultiButton19").hide();
    $("#dropdownmultiButton20").hide();
    $("#dropdownmultiButton21").hide();
    $("#dropdownmultiButton22").hide();
    $("#dropdownmultiButton23").hide();
    $("#dropdownmultiButton24").hide();
    $("#dropdownmultiButton25").hide();
    $("#dropdownmultiButton26").show();
    $("#clickhereWlDST").show();

    $("#clickhereDSI").hide();
    $("#DSI").hide();
  }
}

destinationSelectDocShareIT();

//Additional DPs for Microsoft
function destinationSelectMicrosoft(val) {
  var dropdownHoverMicrosoft = $(
    "#dropdownmultiButton16, #dropdownmultiButton17, #MSFT, #clickhereMSFT, #clickhereTMP, #clickhereTIT"
  );

  if (val === "TechMasterPros") {
    $("#dropdownmultiButton16").show();
    $("#clickhereTMP").show();

    $("#clickhereMSFT").hide();
    $("#MSFT").hide();

    //TechMasterPros
  } else if (val === "TechInsightToday") {
    $("#dropdownmultiButton17").show();
    $("#clickhereTIT").show();

    $("#clickhereMSFT").hide();
    $("#clickhereTMP").hide();
    $("#dropdownmultiButton16").hide();
    $("#MSFT").hide();
  }
}

destinationSelectMicrosoft();

//Crypto
function destinationSelectCrypto(val) {
  var dropdownHoverCrypto = $(
    "#dropdownmultiButton18, #Crypto, #clickhereCrypto, #clickhereBOB"
  );

  if (val === "TheBestofBlockchain") {
    $("#dropdownmultiButton18").show();
    $("#clickhereBOB").show();

    $("#clickhereCrypto").hide();
    $("#Crypto").hide();

    //TheBestofBlockchain
  }
}

destinationSelectCrypto();
