export class Address {
  state: string;
  country: string;
  address: string;
  postalCode: string;
}

export class CreateUserDto {
  username: string;
  displayName?: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
  created_at: Date; // New property for creation timestamp

  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: Address,
  ) {
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.created_at = new Date(); // Initialize created_at with current date/time
  }
}
// DELETE FROM users WHERE username = 'example_username';
