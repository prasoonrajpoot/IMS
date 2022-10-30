
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


-- create Table Orders(
--     order_ID Serial,
--     admin_ID Integer,
--     order_Date date,
--     total_price Integer
-- );

create Table Items(
    ItemId Serial,
    detail varchar(50),
    safeAmount Integer,
    qty Integer,
    price Integer
);

