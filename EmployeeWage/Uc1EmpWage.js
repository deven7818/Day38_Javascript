//UC-1 IF-ELSE CONDITION
/**
 * Checking Employee is present or not by using Math.random() function
 */
{
    const IS_ABSENT = 0

    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("UC-1 Employee is ABSENT");
        
    } else {
        console.log("UC-1 Employee is PRESENT")
    }
}
