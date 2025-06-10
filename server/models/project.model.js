import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  firstname: {
    type: String,
    trim: true,
    required: 'First name is required'
  },
  lastname: {
    type: String,
    trim: true,
    required: 'Last name is required'
  },
  email: {
    type: String,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  },
  completion: {
    type: Date,
    required: 'Completion date is required'
  },
  description: {
    type: String,
    required: 'Description is required'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', ProjectSchema);
