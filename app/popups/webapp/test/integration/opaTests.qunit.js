sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'popups/test/integration/FirstJourney',
		'popups/test/integration/pages/studList',
		'popups/test/integration/pages/studObjectPage'
    ],
    function(JourneyRunner, opaJourney, studList, studObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('popups') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThestudList: studList,
					onThestudObjectPage: studObjectPage
                }
            },
            opaJourney.run
        );
    }
);