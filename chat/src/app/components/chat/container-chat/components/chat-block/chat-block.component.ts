import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {IMessage1} from "../../data-access/store/chat.reducer";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-chat-block',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './chat-block.component.html',
  styleUrl: './chat-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatBlockComponent implements OnInit {
  @Input({required: true}) messages!: IMessage1[];
  @Output() sendMessage = new EventEmitter<IMessage1>();
  @Output() connectSocket = new EventEmitter<void>();

  ngOnInit(): void {
    this.connectSocket.emit();
  }

  public readonly name: string = 'Denis';
  private readonly formBuilder = inject(FormBuilder);

  public readonly form: FormGroup = this.formBuilder.group({
    message: '',
  });

  submit() {
    this.sendMessage.emit(this.form.getRawValue());
    this.form.reset();
  }
}
