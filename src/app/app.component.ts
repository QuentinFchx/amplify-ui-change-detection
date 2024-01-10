import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'amplify';
  unsubscribe: (() => void) | null = null;

  constructor(
    private authenticator: AuthenticatorService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Forcing a change detection "fixes" the issue
    // this.unsubscribe = this.authenticator.subscribe(() => {
    //   this.cdRef.detectChanges();
    // }).unsubscribe;
  }

  ngOnDestroy() {
    if (this.unsubscribe) this.unsubscribe();
  }
}
