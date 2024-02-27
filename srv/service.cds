using db as data from '../db/schema';

service MyService {

    entity stud as projection on data.student;

}