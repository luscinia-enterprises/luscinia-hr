import express from 'express';
import ApplicantModel from '../models/applicant';

const applicantRouter = express.Router();

applicantRouter.get('/', async (_, res) => {
  const applicants = await ApplicantModel.find();
  res.send(applicants);
});

export default applicantRouter;
