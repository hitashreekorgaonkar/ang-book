export interface BookDetailDTO {
  title: string;
  description: {
    value: string;
  }
  excerpts: [{
    excerpt: string;
    pages: string;
    comment: string
  }];
  subject_times: string;
  first_publish_date: string;
  latest_revision: Number;

}