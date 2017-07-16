var exec = require("child_process").exec;

module.exports = {
    /**
     * @function sentiment
     * @param  {String} message  The message you want to detect the sentiment
     * @param  {Function} callback Function to handle the sentiment resutl
     * @description Detects the sentiment of a message
     * @return {String} sentiment string
     */
    sentiment: function (file, message, callback) {
        var child = exec(
            'java -jar ./ML/Java/sentiment_executor-1.0-SNAPSHOT-jar-with-dependencies.jar ' + '"2" "' +
            file +
            '" "' +
            message +
            '"',
            function (error, stdout, stderr) {
                if (error !== null) {
                    console.log("Error -> " + error);
                }
                console.log("Output -> " + stdout);
                callback(stdout.trim());
            }
        );
    }
};