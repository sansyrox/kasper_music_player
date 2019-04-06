//
//  LoginAndSignUpViewController.swift
//  kasper
//
//  Created by Sanskar Jethi on 05/04/19.
//  Copyright © 2019 Sanskar Jethi. All rights reserved.
//

import UIKit

class LoginAndSignUpViewController: UIViewController {

	@IBAction func Login(_ sender: Any) {
		
		performSegue(withIdentifier: "LoginScreen", sender: self)
	}
	@IBAction func SignUp(_ sender: Any) {
		
		performSegue(withIdentifier: "SignUpScreen", sender: self)
		
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
