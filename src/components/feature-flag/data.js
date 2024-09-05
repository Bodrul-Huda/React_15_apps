const dummyDataApi = {
  showImageSlider: true,
  showTicTac: true,
  showLightDart: true,
  showTreeView: false,
  showQrGenerator: false,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyDataApi) setTimeout(resolve(dummyDataApi), 500);
    else reject("Something went wrong");
  });
}

export default featureFlagDataServiceCall;
