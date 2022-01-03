/*
	SCHEMAS
*/

 CREATE DATABASE VMS;
 USE VMS;
 
 DROP DATABASE VMS;
CREATE TABLE owners(
	id_owner VARCHAR(15) PRIMARY KEY UNIQUE NOT NULL,
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    phoneNumber VARCHAR(8),
    email VARCHAR(50)
);

CREATE TABLE pets(
	id_pet VARCHAR(10) PRIMARY KEY UNIQUE NOT NULL, 
	pet_name VARCHAR(15),
    age INT,
    
    id_owner VARCHAR(15),
    
    CONSTRAINT FK_ID_OWNER FOREIGN KEY (id_owner) REFERENCES owners(id_owner)
);

CREATE TABLE appointments(
	id_appointment VARCHAR(10) PRIMARY KEY NOT NULL,
    id_pet VARCHAR(10),
    
    dueDay VARCHAR(2),
    dueMonth VARCHAR(2),
    dueYear VARCHAR(4),
    
    availability ENUM('Pending', 'Done', 'Posponed'),
    
    descriptionProblem TEXT,
    
   
    CONSTRAINT CK_FK_ID_PET FOREIGN KEY (id_pet) REFERENCES pets(id_pet)
);

CREATE TABLE appointments_details(
	id_registro INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
	id_appointment VARCHAR(10),
    id_owner VARCHAR(15),
    
    
    CONSTRAINT CK_FK_DETAILS_ID_APPOINTMENT FOREIGN KEY (id_appointment) REFERENCES appointments(id_appointment),
	CONSTRAINT CK_FK_DETAILS_ID_OWNER FOREIGN KEY (id_owner) REFERENCES  owners(id_owner)
);

SELECT * FROM appointments;
