var flavor = "chocolate";
var vessel = "cone";
var toppings = "sprinkles";
if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "peanuts" || toppings === "sprinkles")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}