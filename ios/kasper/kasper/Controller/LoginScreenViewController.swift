//
//  LoginScreenViewController.swift
//  kasper
//
//  Created by Sanskar Jethi on 05/04/19.
//  Copyright © 2019 Sanskar Jethi. All rights reserved.
//

import UIKit
import Firebase

class LoginScreenViewController: UIViewController {

	@IBOutlet weak var emailInput: UITextField!
	@IBOutlet weak var passwordInput: UITextField!
	
	
	@IBAction func loginButton(_ sender: Any) {
		if let email = emailInput.text, let password = passwordInput.text {
			Auth.auth().signIn(withEmail: email, password: password) { (user, error) in
				if error != nil {
					print(error!)
				} else {
					print("Logged In successfully")
					self.performSegue(withIdentifier: "TabBarController", sender: self)
				}
			}
			print(email,password)
		} else {
			print("Don't leave the fields empty")
		}
		
	}
	override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
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
