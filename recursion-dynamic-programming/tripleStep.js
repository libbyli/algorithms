/* A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at
a time. Implement a method to count how many possible ways the child can run up the stairs. */

const countPaths = (n) => {
  const options = [1, 2, 3];
  let count = 0;

  const findPath = (remainingSteps) => {
    if (remainingSteps === 0) {
      count += 1;
    } else if (remainingSteps < 0) {
      return;
    }

    for (let i = 0; i < options.length; i += 1) {
      findPath(remainingSteps - options[i]);
    }
  };

  findPath(n);
  return count;
};
