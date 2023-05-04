import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class FeedBacksService {
  constructor(private firebase: FirebaseService) {}

  setFeedBacksData(feedback: any) {
    return this.firebase.pushData('feedbacks', feedback);
  }

  getFeedBacksList(limit: number, last_item = undefined) {
    return this.firebase.listData('feedbacks', limit, last_item);
  }
}
