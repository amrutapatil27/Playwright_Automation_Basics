Core Logic - //tagName[@attribute='value']

id, name, data-qa, class.... is unique in nature.

TAG h1, p, input, a, form, img, video, audio, button, table, ul, li, tr, div, select, span, → HTML Tags

Attribute id, class, name, alt, href, src, data-ga, ....srcset.
Absolute XPath: never used
Relative XPath: 
XPath Functions (Prepare interview questions for xpath and its functions,XPath Axes. **IMP)

The function states that there are certain functions you can also use, which I am going to give you.

Contains()

//tag_name[contains(@attribute, 'value_of_attribute')]

Starts-with()

//tag_name[starts-with(@attribute, 'Part_of_Attribute_value')]

Text()

//tag_name[text()='Text of the element']

STRING FUNCTIONS: 
concat(string, ...): XPath concat function concatenates a number of arguments and returns to a concatenated string.

starts-with(string, string): XPath start-with function returns True/False. Returns True if the second argument string starts with the first argument.

contains(string, string) - XPath contains function returns True/False. Returns True if the second argument string contains the first argument.

string-length(string): XPath string-length function returns the length of the string.

substring-after (string, string): XPath substring-after function returns the substring of the first argument string based on the first occurrence of the second argument string after all characters.

qubstring-before (string, string): XPath substring-before function returns the substring of the first argument string based on the first occurrence of the second argument string before all characters.

normalize-space(string): XPath normalize-space function combines sequences of whitespace into a single normalize space, removing leading and trailing whitespace

Examples of functions: //a[@id="btn-make-appointment"]

<a id="btn-make-appointment" href="./profile.php#login" class="btn btn-dark"

b1

//a[contains(@id, "make")] Partial Match

//a[contains (text(), "Make Appointment")]

//a[starts-with(@id, "btn")]

//a[text()="Make Appointment"] Exact Match

//a[text()="Make Appointment" or @id="btn-make-appointment"]

Either True

//a[text()="Make Appointment" and @id="btn-make-appointment"] both True

[25 April RAG Tutorial. XPATH is explained in details]

XPath Axes: 
 finding elements : Hierarchically
 2. When is XPath STILL used? (The 10%)
Despite the decline, you will still see XPath in professional projects in these specific scenarios:

Upward Traversal: If you need to find an element and then select its parent or ancestor. (CSS is only just starting to support :has(), and while Playwright's internal:has works, some older testers still reach for XPath ..).

Complex Text Matching: If you need to find an element that contains a very specific string pattern that getByText can't handle (though Playwright's Regex support has mostly fixed this).

Legacy Enterprise Apps: If you are testing older systems (like SAP, Oracle, or older Salesforce versions) where the HTML is a "mess" of nested tables without IDs or roles.

Shadow DOM (The Exception): Playwright is amazing because its CSS locators automatically pierce the Shadow DOM. XPath cannot do this. If your app uses Web Components, XPath is actually a bad choice because it won't see inside the components.

Xapth → CSS

Temp → Rule

1. Remove the // and @ → input[id="login-username"]