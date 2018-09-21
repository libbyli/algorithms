/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  let sum;
  if (!t1 && !t2) {
    return null;
  } else if (!t1) {
    sum = t2.val;
  } else if (!t2) {
    sum = t1.val;
  } else {
    sum = t1.val + t2.val;
  }
  
  const merged = new TreeNode(sum);
  merged.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
  merged.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
  return merged;
};
