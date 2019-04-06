//
//  SignUpViewController.swift
//  kasper
//
//  Created by Sanskar Jethi on 05/04/19.
//  Copyright © 2019 Sanskar Jethi. All rights reserved.
//

import UIKit
import Firebase

class SignUpViewController: UIViewController {

	@IBOutlet weak var userNameInputField: UITextField!
	
	@IBOutlet weak var emailInputField: UITextField!
	
	@IBOutlet weak var passwordInputField: UITextField!
	
	override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

	
	@IBAction func signUpButton(_ sender: Any) {
		
		if let email = emailInputField.text, let password = passwordInputField.text {
		Auth.auth().createUser(withEmail: email, password: password) { (authResult, error) in
			if error != nil {
				print(error!)
			} else {
				self.performSegue(withIdentifier: "MainScreenSegue", sender: self)
			}
		}
	}
	}
	
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
