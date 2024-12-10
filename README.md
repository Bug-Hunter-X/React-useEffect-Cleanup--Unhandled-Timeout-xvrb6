# React useEffect Cleanup: Unhandled Timeout

This repository demonstrates a common error in React's `useEffect` hook: forgetting to properly clean up asynchronous operations within the cleanup function.  This can lead to memory leaks and unexpected behavior.

## The Problem

The `bug.js` file contains a component that uses `useEffect` to simulate an asynchronous operation (a `setTimeout`).  While it has a cleanup function to prevent the component from running this timeout if it unmounts before the timeout is finished, this cleanup is insufficient as it does not cancel any operations initiated *before* the cleanup function is run.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this scenario. The cleanup function clears the timeout using `clearTimeout` *before* any other code in the cleanup function is run.