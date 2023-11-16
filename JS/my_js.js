// const ss = require("simple-statistics");
// const XLSX = require("xlsx");
// let x_col_name = "crim";
// let y_col_name = "medv";
// let file_path = '../BostonHousing.csv';
// var workbook = XLSX.readFile(file_path);
// core_implementation_2(workbook);

// function csv_to_sheet(file_path) {
//     // read_file:
//     // alert(file_path);
//     let workbook = XLSX.readFile(file_path);
//     /* get first worksheet */
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     /* generate and display HTML */
//     const table = XLSX.utils.sheet_to_html(worksheet);
//     console.log(table);
//
//     return worksheet
// }

function eval_expression(equation_line, x_points) {
    // const evaluate = node.evaluate({x: 3});
    let y_array = [];
    for (let x_ of x_points) {
        y_array.push(equation_line(x_));
    }
    return y_array;
}

function get_linear_coef(worksheet, x_col_name, y_col_name) {
    let aoo = XLSX.utils.sheet_to_json(worksheet);
    // "x" and "y" we want to pull from the data for linear regression input:
    let data_ = aoo.map(row => ([row[x_col_name], row[y_col_name]]));
    return ss.linearRegression(data_);     // feed it what it wants/needs
}

// function core_implementation_2(workbook) {
//     let first_sheet_name = workbook.SheetNames[0];  // Fetch the name of First Sheet
//     let worksheet = workbook.Sheets[first_sheet_name];  // get first sheet
//
//     let lin_coeff = get_linear_coef(worksheet, x_col_name, y_col_name);
//
//     // populate html expression:
//     let expression_equation = 'y='+lin_coeff['m']+'x+'+lin_coeff['b'];
//     console.log(expression_equation);
//
//     // get data x and y separately:
//     let aoo = XLSX.utils.sheet_to_json(worksheet);
//     let x = aoo.map(row => (row[x_col_name]));
//     let y_data = aoo.map(row => (row[y_col_name]));
//
//     // generate y-points for linear regression line:
//     let line_equation = ss.linearRegressionLine(lin_coeff);
//     let y_line = eval_expression(line_equation, x);     // evaluates linear equation and gets us our Y points
//     console.log(y_line);
//     console.log('done');
//
// }