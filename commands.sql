
create Table Employee (
    EId Serial Primary key,
    FName varchar(20),
    email varchar(20),
    pass varchar(20),
    addr varchar(20)
);


create Table Admins(
        -- forieng key to Employee
    admin_ID Serial,
    admin_SSN Integer Primary Key
);


create Table Storage(
    storage_Number Serial Primary Key,
    storage_Location varchar(20)
);


create Table Inventory(
    Item_ID Integer,
    storage_Number Integer,
    Qty Integer,
    onDay date,
    doneBy Integer
);


create Table Orders(
    order_ID Serial Primary Key,
    itemId Integer,
    Eid Integer,
    executedOn varchar(25),
    typeof varchar(20),
    qty Integer
);

create Table Items(
    ItemId Serial Primary Key,
    detail varchar(50),
    safeAmount Integer,
    qty Integer,
    costprice Integer,
    sellprice Integer
);



select Employee.fname , sum( (items.sellprice - items.costprice)*orders.qty) as profit from orders, items, employee where employee.eid = orders.eid and orders.itemid = items.itemid group by employee.eid;