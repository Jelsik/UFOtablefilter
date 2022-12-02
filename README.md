# Spaced Out

## Overview

The purpose of this assignment was to provide a quick and interactive way for a user to interact with a dataset.
A sample dataset of alleged UFO sightings was deployed to a HTML table, which was then made dynamic, allowing the
user to parse through the large set of information quickly and visually.

## Results

The deployment of the filters was successful:
Here the results have been filtered both by US state and a specific city in California. The search criteria can be
interacted with by first: typing the input the user wishes to search for in one or all of the provided areas.
![Filter](https://github.com/Jelsik/UFOtablefilter/blob/main/UFOs/static/images/filterexample.PNG)
Then the user merely needs to hit shift, and the javascript attached to the HTML will automatically filter the
table to present just the data that fits that criteria. With this new smaller, easier to process table, the user can
now focus in on what they are interested in.

## Summary

One drawback of this new design is that although the filters were made more robust, by removing the button to visually
prompt the user to activate the filters, there was no replacement instruction added prompting the user to press "Enter"
in order to apply their final filter selection.

### Suggestions

One suggestion I would make would be to add some kind of display for some example filters. "City" and "Country" are kind
of vague and some results will be hidden if they are from more obscure places. Places that UFO enthusiasts may be interested
in. Another suggestion would be to add additional site functionality. For example, a script that would allow the user
to "print" or download a file of their filtered table for their records would go a long way in making this website more robust.
As it is now, the user would have to screenshot the table themselves in order to keep the data.
