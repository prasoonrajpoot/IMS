
create Table Employee (
    EId Integer Primary key,
    FName varchar(20),
    email varchar(20),
    pass varchar(20),
    addr varchar(20)
);


create Table Admins(
    admin_ID Integer,
    admin_SSN Integer Primary Key;
);


create Table Storage(
    storage_Number Integer Primary Key,
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
    order_ID Integer,
    admin_ID Integer,
    order_Date date,
    total_price Integer
);

create Table Items(
    ItemId Integer,
    order_Id Integer,
    qty Integer,
    price Integer
);

