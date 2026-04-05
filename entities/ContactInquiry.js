// ContactInquiry entity model
export class ContactInquiry {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.message = data.message;
    this.createdAt = data.createdAt || new Date();
  }
}