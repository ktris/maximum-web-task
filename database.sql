create TABLE technique(
    id_item SERIAL PRIMARY KEY,
    name_technique VARCHAR(255),
    accessories VARCHAR(255),
    descript VARCHAR(255),
    state_tech VARCHAR(255),
    date_of_buy date,
    id_employee INTEGER,
    id_provider INTEGER,
    id_move INTEGER,
    id_repair INTEGER,
    availability_tech INTEGER,
    FOREIGN KEY (id_employee) REFERENCES employees (id_employee),
    FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
    FOREIGN KEY (id_move) REFERENCES move (id_move),
    FOREIGN KEY (id_repair) REFERENCES repair (id_repair)
);

create TABLE employees(
    id_employee SERIAL PRIMARY KEY,
    firstname VARCHAR(20),
    surname VARCHAR(20),
    second_name VARCHAR(20),
    phone_number VARCHAR(20),
    adress_name VARCHAR(255),
    job_title VARCHAR(255),
    state_name VARCHAR(255)
);

create TABLE move(
    id_move SERIAL PRIMARY KEY,
    id_from INTEGER,
    id_to INTEGER,
    date_move date,
    FOREIGN KEY (id_from) REFERENCES employees (id_employee),
    FOREIGN KEY (id_to) REFERENCES employees (id_employee)
);

create TABLE providers(
    id_provider SERIAL PRIMARY KEY,
    company_name VARCHAR(255),
    name_provider VARCHAR(255),
    phone_number VARCHAR(20),
    place VARCHAR(255)
);

create TABLE repair(
    id_repair SERIAL PRIMARY KEY,
    item VARCHAR(255),
    specialist VARCHAR(255),
    completion_mark VARCHAR(255),
    repair_date date
);
