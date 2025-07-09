interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Brian',
  lastName: 'Phiri',
  age: 23,
  location: 'Lilongwe',
};

const student2: Student = {
  firstName: 'Chisomo',
  lastName: 'Imfa',
  age: 24,
  location: 'Blantyre',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const header = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

header.appendChild(nameHeader);
header.appendChild(locationHeader);
table.appendChild(header);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
