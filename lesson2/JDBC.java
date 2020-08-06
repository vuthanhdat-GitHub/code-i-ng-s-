// //khai báo mảng
// var number = [4,54,13,90,83,74,54];

// //sắp xếp mảng
// var sort = number.sort(function (a, b) { return a - b });
// console.log(sort);

// //tính tổng mảng
// var sum = number.reduce(function (a, b) { return a + b; }, 0);
// console.log(sum);
// //----------------------------------

// var Array = [
//     { id: 1, name: "hoa hồng" , breed: "hoa"},
//     { id: 2, name: "quả táo"  , breed: "quả"},
//     { id: 3, name: "hoa sen" , breed: "hoa"},
//     { id: 4, name: "hoa lan" , breed: "hoa"},
// ]
// //tìm kiếm mảng
// var item = Array.find(item => item.id === 4);
// console.log(item.name);

// //lọc mảng
// var hoa = Array.filter(function (Array) {
//     return Array.breed == "hoa";
// });
// console.log(hoa);

// //Paging
// function paging(array, pageSize) {
//     var result = [];
//     while (array.length) {
//         result.push(array.splice(0, pageSize));
//     }
//     return result;
// }

// var result = paging([1, 2, 3, 4, 5, 6, 7], 2);
// console.log(result);

package Edureka;
import java.sql.*;
import java.sql.DriverManager;
public class Example {
    // JDBC driver name and database URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost/emp";
    //  Database credentials
    static final String USER = "root";
    static final String PASS = "";
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        try {
            //STEP 2: Register JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");
            //STEP 3: Open a connection
            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, "root", "");
            //STEP 4: Execute a query
            System.out.println("Creating statement...");
            stmt = conn.createStatement();
            String sql;
            sql = "SELECT id, first, last, age FROM Employees";
            ResultSet rs = stmt.executeQuery(sql);
            //STEP 5: Extract data from result set
            while (rs.next()) {
                //Retrieve by column name
                int id = rs.getInt("id");
                int age = rs.getInt("age");
                String first = rs.getString("first");
                String last = rs.getString("last");
                //Display values
                System.out.print("ID: " + id);
                System.out.print(", Age: " + age);
                System.out.print(", First: " + first);
                System.out.println(", Last: " + last);
            }
            //STEP 6: Clean-up environment
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException se) {
            //Handle errors for JDBC
            se.printStackTrace();
        }catch (Exception e) {
            //Handle errors for Class.forName
            e.printStackTrace();
        }finally {
            //finally block used to close resources
            try {
                if (stmt != null)
                    stmt.close()
            } catch (SQLException se2) {
            }// nothing can be done
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }//end finally try
        }//end try
        System.out.println("Goodbye!");
    }//end main
} // end Example


// //STEP 4: Execute a query
// System.out.println("Creating table in given database...");
// stmt = conn.createStatement();
// String sql = "CREATE TABLE EMPLOYEES " +
// "(id INTEGER not NULL, " +
// " first VARCHAR(255), " +
// " last VARCHAR(255), " +
// " age INTEGER, " +
// " PRIMARY KEY ( id ))";
// stmt.executeUpdate(sql);
// System.out.println("Created table in given database...");
// System.out.println("Inserting records into the table...");
// stmt =conn.createStatement();
// String sql ="INSERT INTO Employees VALUES (100, 'Kriss', 'Kurian', 18)";
// stmt.executeUpdate(sql);
// sql = "INSERT INTO Employees VALUES (101, 'Enrique', 'John', 25)";
// stmt.executeUpdate(sql);
// sql= "INSERT INTO Employees  (102, 'Taylor', 'Swift', 30)";
// stmt.executeUpdate(sql);
// sql= "INSERT INTO  Employees VALUES(103, 'Linkin', 'Park', 28)";
// stmt.executeUpdate(sql);
// System.out.println("Inserted records into the table...");