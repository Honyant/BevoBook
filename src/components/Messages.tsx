import { Loader2, MessageSquare } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import Message from './Message';
import { ChatContext } from './ChatContext';
import { useContext, useEffect, useRef } from 'react';

const Messages = () => {
  let combinedMessages = [
    {
      message: 'hi',
      isUserMessage: true,
    },
    {
      message:
        `ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 310F FOUNDATIONS OF ACCOUNTING - VERDUZCO, DAVID B (Face-to-face)
*   "Field" - ACC
*   "Level" - L
*   "Unique" - 2435
*   "Days" - TTH
*   "Hour" - 12:30 p.m.-2:00 p.m.
*   "Room" - UTC 4.124
*   "Status" - open
*   "Flags" - Quantitative Reasoning
*   "Core" - nan
*   "Description" - Restricted to non-McCombs School of Business majors. An introduction to financial and managerial accounting, with emphasis on the content, interpretation, and uses of accounting reports. Discussion of the determination and reporting of net income and financial position, and the theories underlying business financial statements; consideration of managerial accounting topics designed to extend the student's knowledge to the planning and controlling of the operations of the firm. May not be counted toward the Bachelor of Business Administration degree. May be counted toward the Quantitative Reasoning flag requirement.

ACC 698B THESIS - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3025
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: For 698A, graduate standing in the doctoral program in accounting and consent of the supervising faculty member and the graduate adviser; for 698B, Accounting 698A. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 398R MASTER'S REPORT - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3030
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Preparation of a report to fulfill the requirement for the master's degree under the report option. Prerequisite: Graduate standing in the doctoral program in accounting, completion of the core courses for the degree, and consent of the supervising faculty member and the graduate adviser. Hour(s) to be arranged. Offered on the credit/no credit basis only.

ACC 399W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3035
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 699W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3040
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

ACC 999W DISSERTATION - nan (Face-to-face)
*   "Field" - ACC
*   "Level" - G
*   "Unique" - 3045
*   "Days" - nan
*   "Hour" - nan
*   "Room" - nan
*   "Status" - open; reserved
*   "Flags" - nan
*   "Core" - nan
*   "Description" - Prerequisite: Admission to candidacy for the doctoral degree. Offered on the credit/no credit basis only. May be repeated for credit.

`,
      isUserMessage: false,
    },
  ];
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col gap-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      {combinedMessages && combinedMessages.length > 0 ? (
        combinedMessages.map(({ message, isUserMessage }, i) => {
          if (i === combinedMessages.length - 1) {
            return <Message message={message} isUserMessage={isUserMessage} />;
          } else {
            return <Message message={message} isUserMessage={isUserMessage} />;
          }
        })
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="h-8 w-8 text-blue-500" />
          <h3 className="font-semibold text-xl">You&apos;re all set!</h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
