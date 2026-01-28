// ===================================
// Step 2: Employee Role Access System
// ===================================

// Asking employee role
let role = prompt("Enter your role (admin / manager / developer / intern)");

switch (role) {
    case "admin":
        alert("Full system access");
        break;
    case "manager":
        alert("Team management access");
        break;
    case "developer":
        alert("Code access");
        break;
    case "intern":
        alert("Limited access");
        break;
    default:
        alert("Invalid input. Please try again.");
}
// switch checks role and shows access level


// ===================================
// Step 3: Online Payment Method Selection
// ===================================

// Asking payment method
let paymentMethod = prompt("Choose payment method (credit / debit / upi / cod)");

switch (paymentMethod) {
    case "credit":
        alert("You selected Credit Card payment");
        break;
    case "debit":
        alert("You selected Debit Card payment");
        break;
    case "upi":
        alert("You selected UPI payment");
        break;
    case "cod":
        alert("You selected Cash on Delivery");
        break;
    default:
        alert("Invalid payment method. Please try again.");
}
// Shows message based on selected payment method


// ===================================
// Step 4: Order Status Checker
// ===================================

// Asking order status
let orderStatus = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");

switch (orderStatus) {
    case "placed":
        alert("Your order has been placed");
        break;
    case "packed":
        alert("Your order is packed");
        break;
    case "shipped":
        alert("Your order has been shipped");
        break;
    case "delivered":
        alert("Your order has been delivered");
        break;
    case "cancelled":
        alert("Your order was cancelled");
        break;
    default:
        alert("Invalid order status. Please try again.");
}
// Customer sees order progress


// ===================================
// Step 5: Office Working Day Checker
// ===================================

// Asking day name
let day = prompt("Enter day name (Monday - Sunday)");

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        alert("Working Day");
        break;
    case "Saturday":
        alert("Half Day");
        break;
    case "Sunday":
        alert("Holiday");
        break;
    default:
        alert("Invalid day. Please try again.");
}
// Checks office working schedule
