/* 
 * Copyright (C) 2016 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

/**
 * AndroidExamples module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojnavigationlist'
], function (oj, ko, $) {
    /**
     * The view model for the Android Downloads content
     */
    function AndroidDownloads() {
        var self = this, formatVersion, formatJCenterVersion, formatOjoVersion;
        self.latest = ko.observable();
        self.numbersOnly = ko.observable();
        self.latestJCenter = ko.observable();
        self.latestSnapshot = ko.observable();

        // Get the lastest Bintray version
        var url = 'dynamicAssets/android/latestBintrayVersion.json';
        $.get(url).done(function (jqXhr, text, exception) {
            if (jqXhr.name) {
                self.latest('v' + jqXhr.name);
                self.numbersOnly(jqXhr.name);
                self.latestJCenter(jqXhr.name);
            }
        })
        .fail(function (jqXhr, text, exception) {
            console.log('There was a failure retrieving the response: ' + text + ' exception: ' + exception);
        });

        // Re-enable when SNAPSHOT publishing works
        // formatOjoVersion = function(data) {
        //     if (data.results[0].version) {
        //         self.latestSnapshot(data.results[0].version);
        //     }
        // };
    };

    return AndroidDownloads;
});