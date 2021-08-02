import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Applicant {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeId: string;
  postalCode: string;
  workAuth: string;
  eduLevel: string;
  role: string;
  equity: {
    genderId: string;
    lgbtid: boolean;
    pwdid: boolean;
    yob: number;
    minorityid: {
      id: boolean;
      group: string[];
    };
    aboriginalid: {
      id: boolean;
      group: string[];
    };
  };
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Applicant>({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  resumeId: String,
  postalCode: String,
  workAuth: String,
  eduLevel: String,
  role: String,
  equity: {
    genderId: String,
    lgbtid: Boolean,
    pwdid: Boolean,
    yob: Number,
    minorityid: {
      id: Boolean,
      group: [String],
    },
    aboriginalid: {
      id: Boolean,
      group: [String],
    },
  },
});

// 3. Create a Model.
const ApplicantModel = model<Applicant>('Applicant', schema);

export default ApplicantModel;
