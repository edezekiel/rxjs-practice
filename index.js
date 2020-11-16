import { of } from 'rxjs';
import { map } from 'rxjs/operators';

rxjs.of(1, 2, 3).pipe(mape( x => x + '!!!'));