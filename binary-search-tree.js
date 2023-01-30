class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		let newNode = new Node(val);
		if (this.root === null) this.root = newNode;
		let currNode = this.root;

		while (currNode) {
			console.log(currNode);

			if (currNode.val === newNode.val) return 'Value already added';
			if (newNode.val < currNode.val) {
				if (currNode.left === null) return (currNode.left = newNode);
				currNode = currNode.left;
			} else {
				if (currNode.right === null) return (currNode.right = newNode);
				currNode = currNode.right;
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		let newNode = new Node(val);
		if (this.root === null) return (this.root = newNode);

		function dive(node) {
			console.log(node);
			if (node.val === newNode.val) return 'Already added';
			if (node.val > newNode.val) {
				if (node.left === null) return (node.left = newNode);
				dive(node.left);
			} else {
				if (node.right === null) return (node.right = newNode);
				dive(node.right);
			}
		}

		return dive(this.root);
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (this.root === null) return 'Empty Tree';
		let currNode = this.root;
		while (currNode) {
			if (currNode.val === val) return 'Found node: ', currNode;
			if (val < currNode.val) {
				currNode = currNode.left;
			} else {
				currNode = currNode.right;
			}
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		function dive(node) {
			if (!node) return undefined;
			if (node.val === val) return node;
			if (node.val > val) return dive(node.left);
			if (node.val < val) return dive(node.right);
		}
		return dive(this.root);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder() {
		let allVals = [];
		function dive(node) {
			allVals.push(node.val);
			if (node.left) dive(node.left);
			if (node.right) dive(node.right);
			return allVals;
		}
		return dive(this.root);
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder() {
		let allVals = [];
		function dive(node) {
			if (node.left) dive(node.left);
			allVals.push(node.val);
			if (node.right) dive(node.right);
			return allVals;
		}
		return dive(this.root);
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder() {
		let allVals = [];
		function dive(node) {
			if (node.left) dive(node.left);
			if (node.right) dive(node.right);
			allVals.push(node.val);
			return allVals;
		}
		return dive(this.root);
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		let allVals = [];
		function dive(node) {
			allVals.push(node.val);
			if (node.left) dive(node.left);
			if (node.right) dive(node.right);
			return allVals;
		}
		return dive(this.root);
	}
}

module.exports = BinarySearchTree;
