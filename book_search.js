/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */
/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 

 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    // Traverse the dictionary see if searchTerm is contained/included in contentItem.Text
    for (const scannedText of scannedTextObj){
        for (const contentItem of scannedText.Content) {
            if (contentItem.Text.includes(searchTerm)) {
    
                var result = {
                    "SearchTerm": searchTerm,
                    "Results": [{"ISBN": scannedText.ISBN, "Page": contentItem.Page, "Line": contentItem.Line }]
                };

                return result; 
            }
        }
    }
    return false;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Positive Match: Check if "ISBN" of twentyLeaguesIn matches "ISBN" of twentyLeaguesOut.
const test3result = findSearchTermInBooks("the", twentyLeaguesIn);

if (test3result.Results.ISBN === twentyLeaguesOut.Results.ISBN){
    console.log("PASS: Test 3");
}
else{
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut.Results.ISBN);
    console.log("Recieved", test3result.Results.ISBN);
}

// Positive Match: Check if "Page" of twentyLeaguesIn matches "Page" of twentyLeaguesOut.
const test4result = findSearchTermInBooks("the", twentyLeaguesIn);

if (test4result.Results.Page === twentyLeaguesOut.Page){
    console.log("PASS: Test 4");
}
else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut.Results.Page);
    console.log("Recieved:",test4result.Results.Page );
}

// Positive Match: Check if "Line" of of twentyLeaguesIn matches "Line" of twentyLeaguesOut.
const test5result = findSearchTermInBooks("the", twentyLeaguesIn);

if (test5result.Results.Line === twentyLeaguesOut.Results.Line){
    console.log("PASS: Test 5");
}
else{
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut.Results.Line);
    console.log("Recieved:",test5result.Results.Line );
}

// Case-Sensative Match 1: Check that "the" and "The" are not the same.
const test6result = findSearchTermInBooks("the", twentyLeaguesIn);

if (test6result.SearchTerm === twentyLeaguesOut.SearchTerm){
    console.log("PASS: Test 6");
}
else {
    console.log("FAIL: Test 6");
    console.log("Expected:",twentyLeaguesOut.SearchTerm);
    console.log("Recieved:", test6result.SearchTerm)
}

// Case-Sensative Match 2: Check that "the" and "The" are not the same.
const test7result = findSearchTermInBooks("The", twentyLeaguesIn);

if (test7result.SearchTerm != twentyLeaguesOut.SearchTerm){
    console.log("PASS: Test 7");
}
else {
    console.log("FAIL: Test 7");
    console.log("Expected:",twentyLeaguesOut.SearchTerm);
    console.log("Recieved:", test7result.SearchTerm)
}

// Negative Match: Check if search term is not contained/included in contentItem.Text of test8result.
const test8result = findSearchTermInBooks("Pacific", twentyLeaguesIn);

if (test8result == false){
    console.log("PASS: Test 8");
}
else{
    console.log("FAIL: Test 8");
    console.log("SearchTerm is found in Object")
}



