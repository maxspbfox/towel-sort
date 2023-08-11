// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let result = [];
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            result = [...result, ...item];
        } else {
            result = [...result, ...item.reverse()];
        }
    });

    return result;
};
