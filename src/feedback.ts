import { assert } from './utils';
export class Feedback {
  key: string;
  userId?: string;
  private userKey?: string;

  constructor({ key }: { key: string }) {
    this.key = key;
  }

  /**
   * This will be used to identify the user.
   *
   * @param userDetails - The details of the user to identify.
   */
  identify(userDetails: IdentifyType) {
    assert(userDetails.userId, 'userId is required');
    if (this.userKey?.endsWith(userDetails.userId)) {
      assert(this.userId === userDetails.userId, 'User already identified');
      return;
    }
    // TODO - Implement identify with api calls
    this.userKey = 'TODO'; // Add Some key from server which is unique to user and use for identify function
  }

  logout() {
    this.userId = undefined;
  }

  /**
   * This will be used to track the event.
   *
   * @param event - The event to track.
   */
  getFeedbackLink() {
    // TODO - Implement getFeedbackLink with api calls
    return `https://feedback.com/${this.key}`;
  }

  /**
   * Send Feedback , this has to match with the feedback type shown in dashboard.
   */
  sendFeedback(data: SendFeedbackType) {
    // TODO - Implement sendFeedback with api calls
  }

  /**
   * get bug report link for user
   *
   * @param event - The event to track.
   */
  getBugReportLink() {
    // TODO - Implement getBugReportLink with api calls
    return `https://bugreport.com/${this.key}`;
  }
}

type IdentifyType = {
  userId: string;
  email?: string;
  name?: string;
};

type SendFeedbackType = Record<string, string | number | boolean>;
