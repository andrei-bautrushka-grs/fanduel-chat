(function () {
    embedded_svc.addEventHandler("onChatEstablished", function (data) {
        window.parent.name = data.liveAgentSessionKey;
    });
    embedded_svc.snippetSettingsFile.extraPrechatInfo = [
        {
            entityName: "Contact",
            showOnCreate: true,
            linkToEntityName: "Case",
            linkToEntityField: "ContactId",
            entityFieldMaps: [
                { isExactMatch: true, fieldName: "FirstName", doCreate: true, doFind: false, label: "First Name" },
                { isExactMatch: true, fieldName: "LastName", doCreate: true, doFind: false, label: "Last Name" },
                { isExactMatch: true, fieldName: "Email", doCreate: true, doFind: true, label: "Email" },
            ],
        },
    ];
    embedded_svc.snippetSettingsFile.autoOpenPostChat = true;
    embedded_svc.snippetSettingsFile.extraPrechatFormDetails = [
        {
            label: "Visitor URL",
            value: truncateString(window.location.href, 255),
            displayToAgent: true,
            transcriptFields: ["Visitor_URL__c"],
        },
    ];

    function truncateString(str, len) {
        if (!str) return "";
        return str.length <= len ? str : str.slice(0, len);
    }
})();
