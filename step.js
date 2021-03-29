import GuideChimp from "guidechimp"; 
import "guidechimp / dist / guidechimp.min.css";


var tour = [
    {
        element: '#username',
        title: 'Placeholders plugin',
        description: 'Bienvenue',
    },
    {
        element: '#try-and-buy',
        title: 'Try & Buy',
        description: '1.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
    {
        element: '#subscription',
        title: 'Subscription',
        description: '2.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
    {
        element: '#pricing-table',
        title: 'Pricing Table',
        description: '3.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
    {
        element: '#multi-feature',
        title: 'Multi Feature',
        description: '4.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
    {
        element: '#node-locked',
        title: 'Node-Locked',
        description: '5.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
    {
        element: '#pay-per-use',
        title: 'Pay-per-Use',
        description: '6.',
        buttons: [
            {
                title: 'See more',
                class: 'tour-button',
                onClick: function () {
                    alert("Step button click");
                }
            }
        ],
    },
];

    GuideChimp.extend(guideChimpPluginLicensing, { id: "guidechimp-demo@labs64.com" });
    GuideChimp.extend(guideChimpPluginPlaceholders, { template: '%*%' });

    var guideChimp = GuideChimp(tour);

    document.getElementById('startTour').onclick = function () {
        const username_input = document.querySelector('#username');
        guideChimp.setPlaceholders({
        username: username_input.value
    });

    guideChimp.start();
};

