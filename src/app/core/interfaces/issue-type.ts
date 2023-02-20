import {IssueTypeColumn} from "./issue-type-column";
import {IssueTypeEnum} from "../enums";

export interface IssueType {
  name: string;
  description: string;
  icon: string;
  isActive: boolean;
  type: IssueTypeEnum;
  issueTypeColumns: IssueTypeColumn[];
}
