# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A function without state has hard-coded data and props, so it'll always do the same thing. A stateful component holds the "state" of the page, or in other words tracks how it changes through user interaction or other events. This makes a page more interactive, dynamic, and engaging.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

These are deprecated. Don't use them. These are replaced with componentDidMount and componentDidUpdate used after render().

3. Define stateful logic.

How to make a component stateful (replace hard-coded features), or any code that utilizes State.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, act, assert. What the test does, setting up the test, and the test itself. I think the steps would be more clear if they were called "Assert" what the test does, "Arrange" the test actions (userEvent types in an input or checks a box etc), and "Assess" if the feature you're looking for is in the DOM or not.
